# Active Record Tasklists

**Story**: As a programmer, I can create a Tasklist that has a title and description.

$ rails generate model Tasklist title:string description:string
$ rails db:migrate

**Story**: As a programmer, a TaskLists have many Tasks.

$ rails generate migration add_foreign_key_to_task
**app/models/tasklist.rb**
```
class Tasklist < ApplicationRecord
  has_many :tasks
end
```
**app/models/task.rb**
```
class Task < ApplicationRecord
  belongs_to :tasklist
end
```
**db/migrate**
```
class AddForeignKeyToTask < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :tasklist_id, :integer
  end
end
```
- $ rails db:migrate

**Story**: As a programmer, I can create a new Task record that belongs to.

- $ rails c
- > car = Task.find 3
- > car
- => #<Task id: 3, title: "Car", description: "Wash car and get gas", created_at: "2020-03-07 01:50:25", updated_at: "2020-03-08 23:56:54", status: "not done", due_date: "2020-03-10", tasklist_id: nil>
- > car.tasklist = Tasklist.first
- > car
- => #<Task id: 3, title: "Car", description: "Wash car and get gas", created_at: "2020-03-07 01:50:25", updated_at: "2020-03-08 23:56:54", status: "not done", due_date: "2020-03-10", tasklist_id: 1>


**Story**:
A Task has a title, which is a string, and description, which is a string.

**Story**:
As a programmer, I can list all Task records.

**Story**:
As a programmer, I can set a Task record to done given the ID of the record.

**Story**:
As a programmer, I can list all the records that are done.

**Story**:
As a programmer, I can list all the records that are not done.

**Story**:
As a programmer, I can update the title and description of a Task record given the ID of the record.

**Story**:
As a programmer, I can destroy a Task record given the ID of the record.

**Story**:
As a programmer, I can set a Task record with a due date, which is a timestamp.

**Story**:
As a programmer, I can list all the records with a due date.

**Story**:
As a programmer, I can list all the records with a due date today.

**Story**:
As a programmer, I can list all the records without a due date.

**Story**:
As a programmer, I can add multiple comments to a Task record. Comments should have a content field, which is a string.
	**Hint**: A Task has many Comments.

**Story**:
As a programmer, I can list all the Task with their comments.

[Back to Syllabus](../README.md)
