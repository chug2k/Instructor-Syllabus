# Rails Active Record Validations

## Overview (from syllabus)
- Validations are used to ensure that only valid data is saved into your database.
- There are lots of ways to validate data, in this section we will talk about model validations.

## Learning Objectives (from syllabus)
- Exploring the implementation of model validations
- Practicing with validation syntax

## Lecture




## Challenges

You have been tasked to set up an Account model for a your company. The application must be secure.

### Stories for Account:
- As a developer, I need to generate a model called Account that has a username, a password, and an email
- As a developer, I need username, password, and email to be required
- As a developer, I need every username to be at least 5 characters long
- As a developer, I need each username to be unique
- As a developer, I need each password to be at least 6 characters long
- As a developer, I need each password to be unique

### Stories for Address:
- As a developer, I want my Account model to have many associated Addresses
- As a developer, I want Address to have street_number, street_name, city, state, and zip attributes
- As a developer, I want to validate all fields on Address


### Stretch Challenges
Implementing [Custom Validations](https://guides.rubyonrails.org/active_record_validations.html#performing-custom-validations):

- As a developer, I need each Account password to have at least one number
- As a developer, I need each Account password to have at least one special character
- As a developer, I want to validate that Address street_number, street_name, zip are unique for within an account
	- **Hint:** Read about :scope in the Rails validation docs
- As a developer, I want to validate associated addresses on accounts
	- **Hint:** Read about validates_associated in the Rails validation docs
