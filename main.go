package main

import (
    "fmt"
	"github.com/gin-gonic/gin"
)

func main()  {
	router := gin.Default()
	
	router.Static("/static","frontend/build/static")
    router.LoadHTMLGlob("frontend/build/index.html")

    router.GET("/", func(ctx *gin.Context){
        ctx.HTML(200, "index.html", gin.H{})
    })

    router.Run(":5200");
    fmt.Println("Running at http://localhost:5200")
}
