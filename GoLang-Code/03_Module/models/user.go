package models

import "fmt"

type User struct {
	ID   int
	Name string
}

var (
	users  []*User
	nextID = 1
)

func GetUsers() []*User {
	return users
}

func GetUserByID(id int) (User, error) {
	for _, u := range users {
		if u.ID == id {
			return *u, nil
		}
	}
	return User{}, fmt.Errorf("User with ID '%v' not found", id)
}

func AddUser(u User) (User, error) {
	nextID++
	u.ID = nextID
	users = append(users, &u)
	return u, nil
}

func UpdateUser(u User) (User, error) {
	for _, ui := range users {
		if u.ID == ui.ID {
			ui.Name = u.Name
			return *ui, nil
		}
	}
	return User{}, fmt.Errorf("User with ID '%v' not found", u.ID)
}

func RemoveUserById(id int) error {
	for i, u := range users {
		if u.ID == id {
			users = append(users[:i], users[i+1:]...)
			return nil
		}
	}
	return fmt.Errorf("User with ID '%v' not found", id)
}
