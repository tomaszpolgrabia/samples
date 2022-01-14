package main

import (
	"encoding/json"
	"net/http"
)

type StandardResponse struct {
	Result int
	Status string
}

func main() {
	hf := http.HandlerFunc(func(writer http.ResponseWriter, req *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		m := StandardResponse{
			Result: 200,
			Status: "OK",
		}

		p, _ := json.Marshal(m)
		writer.WriteHeader(200)
		_, _ = writer.Write(p)
	})

	s := http.Server{Addr: ":8080", Handler: hf}
	_ = s.ListenAndServe()
}
