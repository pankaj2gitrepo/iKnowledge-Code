package main

import "fmt"

func main() {
	cards := newDeck()
	hand, remainingCards := cards.deal(2)
	fmt.Println("\nAll cards toString")
	fmt.Println(cards.toString())
	fmt.Println("\nInhand Cards")
	hand.print()
	fmt.Println("\nRemaining Cards")
	remainingCards.print()
	filename := "my_cards"
	fmt.Printf("\nSaving cards to file:%s", filename)
	cards.saveToFile(filename)
}
