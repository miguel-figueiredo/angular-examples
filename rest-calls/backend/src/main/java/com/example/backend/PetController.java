package com.example.backend;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/pets")
public class PetController {

  private final PetRepository petRepository;

  public PetController(PetRepository petRepository) {
    this.petRepository = petRepository;
  }

  @GetMapping
  Collection<Pet> list() {
    return petRepository.list();
  }

  @PostMapping
  void create(@RequestBody Pet pet) {
    petRepository.save(pet);
  }

  @DeleteMapping("/{id}")
  void delete(@PathVariable Long id) {
    petRepository.delete(id);
  }
}
