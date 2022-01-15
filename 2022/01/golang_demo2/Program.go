package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"os"
	"strconv"
)

type StandardResponse struct {
	Code    int    `json:"code"`
	Status  string `json:"status"`
	Handler string `json:"handler"`
}

func handleIndex(writer http.ResponseWriter, _ *http.Request) {
	resp := StandardResponse{
		Code:    200,
		Status:  "OK",
		Handler: "index",
	}

	p, err := json.Marshal(resp)
	if err != nil {
		writer.WriteHeader(500)
		_, _ = writer.Write([]byte("Internal server error"))
		_, _ = fmt.Fprintf(os.Stderr, "Internal server error while marshalling response")
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(200)

	_, err = writer.Write(p)

	if err != nil {
		_, _ = writer.Write([]byte("Internal server error"))
		_, _ = fmt.Fprintf(os.Stderr, "Internal server error while sending response")
	}
}

func handleInfo(writer http.ResponseWriter, _ *http.Request) {
	resp := StandardResponse{
		Code:    200,
		Status:  "OK",
		Handler: "info",
	}

	p, err := json.Marshal(resp)
	if err != nil {
		writer.WriteHeader(500)
		_, _ = writer.Write([]byte("Internal server error"))
		_, _ = fmt.Fprintf(os.Stderr, "Internal server error while marshalling response")
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(200)

	_, err = writer.Write(p)

	if err != nil {
		_, _ = writer.Write([]byte("Internal server error"))
		_, _ = fmt.Fprintf(os.Stderr, "Internal server error while sending response")
	}

}

func handleDefault(writer http.ResponseWriter, _ *http.Request) {
	resp := StandardResponse{
		Code:    404,
		Status:  "Not found",
		Handler: "default",
	}

	p, err := json.Marshal(resp)
	if err != nil {
		writer.WriteHeader(500)
		_, _ = writer.Write([]byte("Internal server error"))
		_, _ = fmt.Fprintf(os.Stderr, "Internal server error while marshalling response")
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(404)

	_, err = writer.Write(p)

	if err != nil {
		_, _ = writer.Write([]byte("Internal server error"))
		_, _ = fmt.Fprintf(os.Stderr, "Internal server error while sending response")
	}

}

func main() {
	args := os.Args

	var port = 8080
	if len(args) >= 2 {
		p, err := strconv.Atoi(args[1])
		if err != nil {
			panic(fmt.Errorf("there was a conversion error for port number %v", err))
			return
		}
		port = p
	}

	fmt.Printf("Starting new server on port %v...", port)
	r := mux.NewRouter()

	r.HandleFunc("/", handleIndex)
	r.HandleFunc("/info", handleInfo)
	r.NotFoundHandler = http.HandlerFunc(handleDefault)

	server := http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: r,
	}

	if err := server.ListenAndServe(); err != nil {
		panic(fmt.Errorf("got error while starting server %v", err))
	}
}
