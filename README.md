# HomeworkTrackingApp

This web application is a file download upload application developed using Spring Boot, React and Bootstrap.The user can save and delete homework information such as homework title, homework subject, deadline, lesson name.


### Using Tools & Technologies
#### Backend
* Java 8
* Spring Boot  (with  Spring Web MVC, Spring Data JPA)
* MySQL
* Maven 3.6.1

#### Frontend
* React 16.8
* React Router 4.3
* Bootstrap 4
* Reactstrap 6.5
___

These are APIs that we need to provide:

| Method  | Route  | Body  | Description  |
|---|---|---|---|
| `POST`  | /api/homeworks   | {"id", "title", "subject", "lesson", "deadline"}   | Create new homework  |
| `DELETE`  | /api/homeworks/{id}   | {"id"}   | Delete homework  |
| `GET`  | /api/homeworks  | Empty  | Get homework list  |

___

### UI
Some screenshots from the application.

Home Page.

![homePage](https://user-images.githubusercontent.com/24254922/96388335-dcb99c00-11b0-11eb-80c7-8653ec3557da.png)
___

Page with the list of lessons.

![lessonPage](https://user-images.githubusercontent.com/24254922/96388332-daefd880-11b0-11eb-9bac-fe311eea25f3.png)
___

The page with the homework list. Adding and deleting homework is done on this page.

![homeworksPage1](https://user-images.githubusercontent.com/24254922/96388333-dc210580-11b0-11eb-9960-01681a642a33.png)
___
Adding homework.

![homeworkPage3](https://user-images.githubusercontent.com/24254922/96433352-d9083280-120d-11eb-95ef-74ba6f71dd80.png)
___


![homework4](https://user-images.githubusercontent.com/24254922/96388336-dcb99c00-11b0-11eb-807e-39facf1d0750.png)
___

Deleting homework.

![homework5](https://user-images.githubusercontent.com/24254922/96388337-dd523280-11b0-11eb-81c8-534a3dd6ddae.png)
___


