# Rails Model Associations

## Overview (from syllabus)
- In Rails, an association (or relationship) is a connection between two Active Record models.
- Creating associations is a useful way to keep our code DRY and our databases clean and organized.
- A foreign key is a column in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.

## Learning Objectives (from syllabus)
- Exploring associations between models
- Understanding the purpose of a foreign key

## Vocabulary (from syllabus)
- has_many
- belongs_to
- foreign key

## Concepts to Cover


## Review and Tidbits

Undo a generate command:
$ rails destroy <whatever you passed>


Play around with model names:
- Person
- Child
- Fish
- Goose

## Lecture
So far we have have made a database with one table. So it is time to move up in the world and create multiple tables in your database.

Typically when there is multiple tables in database they are going to have a connection to each other. These connections are called Active Record Relationships or Active Record Associations.

Think about creating a database table of albums. Some of the potential columns you would want is the artist, the year it was released, the cover art, the genre, and you want to have all the songs. Every album is going to have a different number of songs so creating columns named Track 1, Track 2, Track 3, is pretty limited. Plus what if you needed more info for the song, like who wrote the song, or the length of the song would require more columns. That sounds pretty messy.

So we can create an entire other table called Songs that has a relationship with Album. This type of relationship can be defined as an Album has_many Songs and Song belongs_to Album.

#### Types of Relationships
Rails supports six types of associations:
- belongs_to
- has_one
- has_many
- has_many :through
- has_one :through
- has_and_belongs_to_many

The combination of relationships are described as:
- one-to-many
- one-to-one
- many-to-many

For today we are going to focus on the has_many belongs_to relationship.

This is for things like Person has_many Outfits, Outfits belongs_to Person, Library has_many Books, Books belong_to Library, Album has_many Songs, Songs belong_to an album.

I'm going to use the example:

Netflix has_many Episodes
Episodes belong_to Netflix

Here is a secret - you don't have to type generate, you can just put g.

$ rails g model Netflix title:string tv_show:boolean description:text

Let's add some content to Netflix first.

$ rails c

Netflix.create title: "Friends", tv_show: true, description: "Hilarity ensues."

Netflix.create title: "fjdkla", tv_show: true, description: "fklsfdsf"

$ Netflix.all

So we have two shows in here and we want to add episodes to each one.

$ rails g model Episode name:string season:string
(don't hit enter!)

I'll just add two attributes for the sake of brevity, but I can imagine I would want to know who wrote the episode, who directed it, guest stars, run time, the original release data, the plot summery.

So I want to create another model but I need to connect it to the right place. I don't want my Friends episodes to belong to the whole table and I don't want them to belong to flsjfls. So I have to add a way to connect each instance of the Episode table to one instance of the Netflix table. So if I want to target one instance of a table what is something I know will always be part of the instance and always be unique?

The id of the entry on Netflix.

So we are going to define the relationship of Episode to Netflix with a foreign key.

Foreign keys always go on the belongs_to side.
That is an important thing to remember.

So the foreign key targets the primary key of the table to which it belongs.

And it looks like this:

$ rails g model Episode name:string season:string netflix_id:integer

It is the name of the table_id and the data type should be integer.

So foreign keys always live on the belongs_to table and it will always be named for the table it belongs to.

$ rails db:migrate

Great, we have two models.

We have two migrations and a schema with both models.

Now we have to create a connection between the model classes.

In app/models there is Netflix and Episodes

Netflix has_many :episodes
Episodes belongs_to :netflix

The has many is plural since it will hold many entries on that table.

The belongs to is singular since it will only be connected to one instance in the database.

Now we can add instance of Episodes

friends = Netflix.first

So I can use whatever method I want to save the entry in a variable. In this case it is the first entry, so this will work.

friends
Returns my entry

With this we can create new entries for Episodes.

friend.episodes.create name: "The one with the Holiday Armadillo", season: "7"

Note that every entry has a primary key associated with that entry.

And in the netflix_id we get 1 - and that 1 is referring to the primary id of the friends entry on the Netflix table.

friend.episodes.create name: "The one with where no one is ready", season: "3"

The primary key for this one is 2, but the foreign key still refers to the Friends primary key.


Add some content for the other show. Show primary and foreign keys.

### Summary
- This relationship is called a has_many/belongs_to
- The foreign key always goes on the belongs_to side
- You have to define the relationships in the model Class files
- You can create a column for the foreign key, but it is up to Rails to populate the column
- And what do you do if you forget to add a foreign key column? Migration!

## Credit Cards and Owners Challenge Buildout 

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
