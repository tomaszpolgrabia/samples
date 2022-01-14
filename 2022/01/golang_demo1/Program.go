package main

import (
	"encoding/json"
	"net/http"
)

type StandardResponse struct {
	result int
	status string
}

func main() {
	hf := http.HandlerFunc(func(writer http.ResponseWriter, req *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		m := StandardResponse{
			result: 200,
			status: "OK",
		}

		p, _ := json.Marshal(m)
		writer.WriteHeader(200)
		_, _ = writer.Write(p)
	})

	s := http.Server{Addr: ":8080", Handler: hf}
	_ = s.ListenAndServe()
}
