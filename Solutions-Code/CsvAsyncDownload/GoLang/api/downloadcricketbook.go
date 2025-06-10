package api

import (
	"bytes"
	"encoding/csv"
	"github.com/gin-gonic/gin"
)
func DownloadCricketBook(c *gin.Context) {
	var cricketBook [][]string
	cricketBook = [][]string{
		{"Player Name", "Country"},
		{"MSD", "India"},
		{"Sachin", "India"},
	}
	for i := 0; i<100;i++ {
		cricketBook = append(cricketBook, []string{"Youraj", "India"})
	}
	b := new(bytes.Buffer)
	w := csv.NewWriter(b)
	w.WriteAll(cricketBook)
	c.Writer.Write(b.Bytes())
}