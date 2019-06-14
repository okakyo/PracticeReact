package model

import (
	"database/sql"
)

type Accounts struct {
	ID int64 `json:"id`
	name string `json:"name"`
	password string `json:"password"`
	email  string `json:"email"`
	admin bool  `json:"admin"`
}

func GetAll(db *sql.DB) ([]*Accounts, error){
	rows, err:=db.Query(`select * from accounts`)
	if err!=nil{
		return nil,err;
	}
	defer rows.Close()

	var data []*Accounts

	for rows.Next(){
		m := &Accounts{}
		// Tutorial 1-1. ユーザー名を表示しよう
		if err := rows.Scan(&m.ID,&m.name, &m.password,&m.email,&m.admin); err != nil {
			return nil, err
		}
		data = append(data, m)
			
		}
	return data,nil
}

func GetByID(db *sql.DB, id string)(*Accounts, error ){
	ans := &Accounts{};
	if err := db.QueryRow("select * from accounts where id=?",id).Scan(&ans.ID,&ans.name,&ans.password,&ans.email,&ans.admin); err!=nil{
		return nil, err;
	}
	return ans,nil
}

