# Rails Migrations

## Video: Adding Columns to a Database
[![YouTube](http://img.youtube.com/vi/M6Zr-q_2c80/0.jpg)](https://www.youtube.com/watch?v=M6Zr-q_2c80)

## Overview
- Migrations are used to modify the shape of an existing database.
- Changing the shape of the database can include adding or deleting columns, changing the name of the column, or changing the data type of a column.

## Learning Objectives
- Using a Rails generate command to modify the database

## Vocabulary
- migrations

Migrations change the shape of the database. Even the initial creation of a table is making a change to the shape of the database. We never directly modify the database shape or the schema.

You would want to use a migration when:
- You need to add a column
- You need to change the data type of a column
- You forgot a column
- You need to delete a column
- You need to rename a column

Migrations act as a history of your project. They are like git commits. If you are at the very beginning of your project and you realize you made a mistake in your database, you can delete it and start over. On a fresh app there is the option to burn it down. But once you are adding data to your app, you don't get to delete and start over. You have to use migrations. So here is an opportunity to practice.

A perfect example that you will probably all use migrations will happen tomorrow. We are going to talk about relationships between tables and to define relationships between tables we have to use something called a foreign key. It is very likely that at some point you will forget to add a foreign key and will need to add it later.

Migrations are just a class - should be named descriptively

Migration names are PascalCased or snake_cased
Migration names start with an action that describes the purpose of the migration (i.e. create, add, remove, etc)
The migration name ends with the name of the table and should be plural (add_name_to_users)

$ rails generate migration add_name_to_users

def change

add_column
add_column :table_name, :column_name, :data_type

remove_column
remove_column :table_name, :column_name

change a column data type
change_column :table_name, :column_name, :data_type

rename a column
rename_column :table_name, :column_name, :data_type

$ rails db:migrate


## Challenges
```bash
# Create a new rails application called favorite_movies
$ rails new favorite_movies -d postgresql -T

# Create the database
$ rails db:create

# Generate a model with a title attribute and a genre attribute
$ rails generate model Movies title:string genre:string

# Add five entries to the database in Rails console
> Movie.create title: "Austin Powers", genre: "Comedy"

# Create a migration to add a new column to the database called movie_length
$ rails generate migration add_length_movies

def change
  add_column :movie, :movie_length, :string
end

# Update the values of the existing attributes to include a movie_length value
> austin = Movie.first
> austin.movie_length = "2 hours"
```
