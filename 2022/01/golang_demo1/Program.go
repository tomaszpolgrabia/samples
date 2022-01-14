package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Hello World!!!")
	f := func(writer http.ResponseWriter, req *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		m := map[string]string{
			"result": "ok",
		}
		p, _ := json.Marshal(m)
		writer.WriteHeader(201)
		_, _ = writer.Write(p)
	}

	http.HandleFunc("/", f)
	_ = http.ListenAndServe(":8080", nil)
}
