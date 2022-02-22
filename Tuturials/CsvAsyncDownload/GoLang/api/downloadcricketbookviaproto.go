package api

import (
	"github.com/gin-gonic/gin"
	"gocsv/proto/github.com/tutorials/go/cricketbookpb"
	"net/http"
)

func DownloadCricketBookViaProto(c *gin.Context) {
	player1 := &cricketbookpb.Player{ Name: "MSD", Country: "India"}
	player2 := &cricketbookpb.Player{ Name: "Sachin", Country: "India"}
	cricketBook := &cricketbookpb.CricketBook{}
	cricketBook.Tournament = "IPL"
	cricketBook.Player = append(cricketBook.Player, player1)
	cricketBook.Player = append(cricketBook.Player, player2)
	c.ProtoBuf(http.StatusOK, cricketBook)
}
