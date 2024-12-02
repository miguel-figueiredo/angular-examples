package com.example.backend;

import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class PetRepository {

  private final Map<Long, Pet> map = new HashMap<>();

  void save(Pet pet) {
    map.put(pet.id(), pet);
  }

  Collection<Pet> list() {
    return map.values();
  }

  void delete(Long id) {
    map.remove(id);
  }
}
