package com.example.backend;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Pet(
  @JsonProperty("id")
  Long id,
  @JsonProperty("name")
  String name) {
}
