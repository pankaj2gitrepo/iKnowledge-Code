package main

import (
	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
	"gocsv/api"
	"net/http"
)

func main() {
	// initialize new gin engine (for server)
	r := gin.Default()
	r.Use(cors.AllowAll())
	//r.Use(CORSMiddleware())
	r.GET("/HelloCricket", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{"hello": "cricket"})
	})
	r.GET("/DownloadCricketBook", api.DownloadCricketBook)
	r.GET("/GetCricketBookViaProto", api.GetCricketBookViaProto)
	r.POST("/DownloadCricketBookViaProto", api.DownloadCricketBookViaProto)
	// start the server
	r.Run(":5100")
}
