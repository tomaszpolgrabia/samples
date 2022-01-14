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
	sm := http.NewServeMux()
	hf := http.HandlerFunc(func(writer http.ResponseWriter, req *http.Request) {
		if req.URL.Path != "/" {
			http.NotFound(writer, req)
			return
		}

		writer.Header().Set("Content-Type", "application/json")
		m := StandardResponse{
			Result: 200,
			Status: "OK",
		}

		p, _ := json.Marshal(m)
		writer.WriteHeader(200)
		_, _ = writer.Write(p)
	})

	hf2 := http.HandlerFunc(func(writer http.ResponseWriter, req *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		m := StandardResponse{
			Result: 200,
			Status: "NOK",
		}

		p, _ := json.Marshal(m)
		writer.WriteHeader(200)
		_, _ = writer.Write(p)
	})

	sm.Handle("/", hf)
	sm.Handle("/info", hf2)
	s := http.Server{Addr: ":8080", Handler: sm}
	_ = s.ListenAndServe()
}
