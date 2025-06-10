package api

import (
	"bytes"
	"encoding/csv"
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

	var csvContent [][]string
	csvContent = [][]string{
		{"Player Name", "Country"},
		{"MSD", "India"},
		{"Sachin", "India"},
	}
	for i := 0; i<100;i++ {
		csvContent = append(csvContent, []string{"Youraj", "India"})
	}
	b := new(bytes.Buffer)
	w := csv.NewWriter(b)
	w.WriteAll(csvContent)
	cricketBook.FileCsv = b.Bytes()
	c.ProtoBuf(http.StatusOK, cricketBook)
}
