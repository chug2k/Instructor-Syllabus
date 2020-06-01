# Rails Active Record Validations

## Overview (from syllabus)
- Validations are used to ensure that only valid data is saved into your database.
- There are lots of ways to validate data, in this section we will talk about model validations.

## Learning Objectives (from syllabus)
- Exploring the implementation of model validations
- Practicing with validation syntax

## Lecture
One of the important things that we as developers need to do is make sure that our database is as useful as possible. And so we don't want our users to add partial content or bad content to the database. So far, we can add content to the database and there is nothing that is preventing what type of data it is - other than the data type that is set when we create the model. We also have nothing preventing users from not entering info in all the fields. And nils are really frustrating to deal with when you want to pull meaningful content back from your database.

So we can add validations to the model class that will set up requirements for the information being passed in. Validations will help our users create clean data and it will help prevent any unwanted actions - nefarious or just accidental.

There are a lot of validations that can be added to your application, but since we are in model-land, we are going to create model validations.

$ rails new reso -d postgresql -T
$ rails db:create

This is a good time to review the has_many/belongs_to relationship as well. I don't need two models to create validation but we might as well.

$ rails g model Hotel reservation:string parking_fee:string

$ rails g model Room beds:string capacity:string hotel_id:integer

$ rails db:migrate

add has_many/belongs_to

create two instances of each

### Validates Presence
Let's start with just adding validations that requires all the fields to have content.

Validates take the argument of all the columns in which we want to pass the validation. Then we pass an argument of the type of validation. Let's start with just validating presence.

validates :reservation, :parking_fee, presence: true

validates :beds, :capacity, presence: true

Hotel.create reservation: "2 nights", parking_fee: "none"

Now I can't create an instance if I don't pass in all the information.

Hotel.create reservation: "3 nights"

And further more, I can ask Rails to give me a lovely error message of why it wasn't able to be created by passing the bang operator onto the create method.

Hotel.create! reservation: "3 nights"

### Validates belongs_to
Starting in Rails 5 the belongs_to side of relationships is validated by default.

class Rooms < ApplicationRecord
  belongs_to :hotel  #default validation for belongs to presence: true
end

This prevents any content being added to the belongs_to database that doesn't have a model instance defined as its parent.


### Validates Uniqueness
validates :reservation, uniqueness: true

### Validates Length

Validates length of strings

validates :beds, length: { minimum: 2 }
validates :capacity, length: { maximum: 50 }
validates :capacity, length: { is: 50 }
validates :capacity, length: { in: 1..4 }

### Custom Validations
There are lots of built-in validation and you'll want to do a little research to learn more about what is available, but sometimes the prebuilt validations aren't quite enough. So you can write your own validation methods. The stretch challenges involve writing custom validations so I want to talk about it a little bit, but I also want this to be something that if you choose to do the stretch challenge, it will require work. And that is a good thing.

But I'll give you a jumping off point.

When creating custom validations, you will create a method that gets called by the validate method. In the method, you make an evaluation and add a custom error message as the output.


Next time: a = Account.create username: "Not valid" a.errors.any? (returns a boolean) a.valid? (returns a boolean) a.error.full_messages


## Challenges

You have been tasked to set up an Account model for a your company. The application must be secure.
```
$ rails new account_challenge -d postgresql -T
$ rails db:create
```
**Troubleshooting note:** If the validations aren't taking, restart the rails console session.

**Test input:** Account.create username: "LEARN Student", password: "123456", email: "test@test.com"
**Test input:** street_number: "1234", street_name: "J Street", city: "San Diego", state: "CA", zip:"92101"


### Stories for Account:
- As a developer, I need to generate a model called Account that has a username, a password, and an email
```
$ rails generate model Account username:string password:string email:string
$ rails db:migrate
```

- As a developer, I need username, password, and email to be required

In the file *app/models/account.rb*

```
class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
end
```
$ rails c
```
> Account.create username: "LEARN Student"
 => #<Account id: nil, username: "LEARN Student", password: nil, email: nil, created_at: nil, updated_at: nil>
```
Doesn't let you create a new entry without all the information.

If you pass in a bang operator to the create method, it gives a more descriptive error message.
```
> Account.create! username: "LEARN Student"
Traceback (most recent call last):
        1: from (irb):2
ActiveRecord::RecordInvalid (Validation failed: Password can't be blank, Email can't be blank)
```

- As a developer, I need every username to be at least 5 characters long
```
class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
end
```

In rails c
```
> Account.create username: "L", password: "123456", email: "test@test.com"
=> #<Account id: nil, username: "L", password: [FILTERED], email: "test@test.com", created_at: nil, updated_at: nil>
```

- As a developer, I need each username to be unique
```
class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
end
```

In rails c
```
> Account.create username: "LEARN Student", password: "123456", email: "test@test.com"
(0.1ms)  BEGIN Account Exists? (0.3ms)  SELECT 1 AS one FROM "accounts" WHERE "accounts"."username" = $1 LIMIT $2  [["username", "LEARN Student"], ["LIMIT", 1]](0.2ms)  ROLLBACK
=> #<Account id: nil, username: "LEARN Student", password: [FILTERED], email: "test@test.com", created_at: nil, updated_at: nil>
```

- As a developer, I need each password to be at least 6 characters long
```
class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
end
```

In rails c
```
> Account.create username: "LEARN Student", password: "12345", email: "test@test.com"
(0.2ms)  BEGIN Account Exists? (0.7ms)  SELECT 1 AS one FROM "accounts" WHERE "accounts"."username" = $1 LIMIT $2  [["username", "LEARN Student"], ["LIMIT", 1]] (0.2ms)  ROLLBACK
=> #<Account id: nil, username: "LEARN Student", password: [FILTERED], email: "test@test.com", created_at: nil, updated_at: nil>
 ```
- As a developer, I need each password to be unique
```
class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
  validates :password, uniqueness: true
end
```

In rails c
```
> Account.create! username: "LEARN A", password: "123456", email: "test@test.com"
   (33.3ms)  BEGIN
	 Account Exists? (37.7ms)  SELECT 1 AS one FROM "accounts" WHERE "accounts"."username" = $1 LIMIT $2  [["username", "LEARN A"], ["LIMIT", 1]]
  Account Exists? (0.4ms)  SELECT 1 AS one FROM "accounts" WHERE "accounts"."password" = $1 LIMIT $2  [["password", "123456"], ["LIMIT", 1]]
   (17.6ms)  ROLLBACK
Traceback (most recent call last):
        2: from (irb):2
        1: from (irb):3:in `rescue in irb_binding'
ActiveRecord::RecordInvalid (Validation failed: Password has already been taken)
```


### Stories for Address:
- As a developer, I want my Account model to have many associated Addresses

- As a developer, I want Address to have street_number, street_name, city, state, and zip attributes
```
$ rails g model Address street_number:string street_name:string city:string state:string zip:string account_id:integer
$ rails db:migrate
```
*app/models/account.rb*
```
class Account < ApplicationRecord
  has_many :addresses
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
  validates :password, uniqueness: true
end
```
*app/models/address.rb*
```
class Address < ApplicationRecord
  belongs_to :account
end
```

- As a developer, I want to validate all fields on Address
```
class Address < ApplicationRecord
  belongs_to :account
  validates :street_number, :street_name, :city, :state, :zip, presence: true
end
```

### Stretch Challenges
Implementing [Custom Validations](https://guides.rubyonrails.org/active_record_validations.html#performing-custom-validations):

- As a developer, I need each Account password to have at least one number
- As a developer, I need each Account password to have at least one special character
- As a developer, I want to validate that Address street_number, street_name, zip are unique for within an account
	- **Hint:** Read about :scope in the Rails validation docs
- As a developer, I want to validate associated addresses on accounts
	- **Hint:** Read about validates_associated in the Rails validation docs
