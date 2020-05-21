# Rails Active Record Associations

## Overview
- In Rails, an association (or relationship) is a connection between two Active Record models.
- Creating associations is a useful way to keep our code DRY and our databases clean and organized.
- A foreign key is a column in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.

## Learning Objectives
- Exploring associations between models
  - Examples of associations: pizza/topping, hotel/rooms, apple/seeds
  - Notice the belongs_to are all plural
  - Creating DRY code: person/email could get messy if you need columns for all the email addresses
- Foreign key


## Types of Relationships
Rails supports six types of associations:
belongs_to
has_one
has_many
has_many :through
has_one :through
has_and_belongs_to_many


## Example Buildout
Goal - create two models with an association, a library has its information and each branch has books
```
$ rails new library -d postgresql -T
$ cd library
$ rails db:create
```

- generate a library model
```
$ rails generate model Library branch:string location:string
$ rails db:migrate
```

A Library has_many Books. A Book belongs_to a Library.

Add a couple of entries to the database:

```
$ rails c
> Library.create branch: "Downtown", location: "San Diego"
> Library.create branch: "Hillcrest", location: "San Diego"
> Library.all
```
Remember that rails automatically adds a primary_key to each entry in our database.

- generate a Book model

```
$ rails generate model Book title:string author:string library_id:integer
$ rails db:migrate
```
- Foreign key is the first step to creating an association


- Look at the migrations and the schema
- Update each model class

```ruby
class Library < ApplicationRecord
  has_many :book
end
```
Note: books is plural

```ruby
class Book < ApplicationRecord
  belongs_to :library
end
```
Note: library is singular

Assign a book to a library in rails c

```
$ rails c
> downtown = Library.first
> downtown.books.create title: "Harry Potter", author: "JK Rowling"
> downtown.books.create title: "Winnie the Pooh", author: "AA Milne"
> downtown.books
```
One library can have lots of books
The foreign key is assigned my rails when we create the new entry

- The foreign key always goes on the belongs_to side.
- By convention the foreign key should always be the `modelname_id` and the data type should be integer. -
- The has_many model is singular, the belongs_to model is plural. A Person (singular) has_many emails (plural).

## Troubleshooting Tip
It is an easy mistake to forget a foreign key. It is also a common beginner mistake to mislabel the column or to make a mistake when assigning the data type. If this happens, migrations are your friend. Create a migration to update your database.

## Challenge: Credit Cards and Owners

**Set Up**
- Create a new rails application and database
- Create a model for owner
- An owner has a name and address, and can have multiple credit cards
- Create a model for credit card
- A credit card has a number, an expiration date, and an owner

**Interactions**
- Create three owners and save them in the database
- Create a credit card in the database for each owner
- Add two more credit cards to one of the owners

### Stretch Challenge
- Add a credit limit to each card
- Find the total credit extended to the owner with multiple credit cards

[Go to next lesson: Rails Active Record Validations](./active_record_validations.md)

[Back to Rails Active Record Migrations](./active_record_migrations.md)

[Back to Syllabus](../README.md)
