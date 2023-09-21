# Hosital staff management system

![ERP](ERP.gif)

## Overview
An hosptial staff manamgement system consisting of management of staff related to creating, updating and deleting.

## Purpose
I created an online staff management system that will allow users can add, edit, update, search and delete employees.

## Functionalities:

**1. Add staff information:** <br />
URI: /api/v1/staff/ <br />
Method: PUT <br />
&nbsp; &nbsp; * name <br />
&nbsp; &nbsp; * role <br />
&nbsp; &nbsp; * age <br />
&nbsp; &nbsp; * gender <br />
&nbsp; &nbsp; * emailId <br />
&nbsp; &nbsp; * department <br />

**2. Get staff information:** <br />
URI: /api/v1/staff/ <br />
Method: GET <br />
&nbsp; &nbsp; * emailId <br />

**3. Update staff information:** <br />
URI: /api/v1/staff/ <br />
Method: POST <br />
&nbsp; &nbsp; * emailId <br />
&nbsp; &nbsp; * name <br />
&nbsp; &nbsp; * age <br />
&nbsp; &nbsp; * role <br />

**4. Delete staff information:** <br />
URI: /api/v1/staff/ <br />
Method: DELETE <br />
&nbsp; &nbsp; * emailId <br />

## Used technologies:
&nbsp; &nbsp; * Node.js <br />
&nbsp; &nbsp; * Express <br />
&nbsp; &nbsp; * MongoDB <br />

## How to run:
&nbsp; &nbsp; 1. npm install <br />
&nbsp; &nbsp; 2. npm run dev <br /><br />

## Environment variables required
`PORT=""
API_VERSION=""
NODE_ENV=""
SECRET_TOKEN=""
MONGODB_URI=""`
