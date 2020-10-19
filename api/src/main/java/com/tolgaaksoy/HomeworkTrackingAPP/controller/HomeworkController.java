package com.tolgaaksoy.HomeworkTrackingAPP.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import com.tolgaaksoy.HomeworkTrackingAPP.model.Homework;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tolgaaksoy.HomeworkTrackingAPP.repository.HomeworkRepository;

@RestController
@RequestMapping("/api")
public class HomeworkController {
	
	@Autowired
	private HomeworkRepository homeworkRepository;
	
	@GetMapping("/homeworks")
	List<Homework> getHomeworks(){
		return homeworkRepository.findAll();
	}

	@DeleteMapping("/homeworks/{id}")
	ResponseEntity<?>  deleteHomework(@PathVariable Long id){
		homeworkRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/homeworks")
	ResponseEntity<Homework> createHomework(@Valid @RequestBody Homework homework) throws URISyntaxException{
		Homework result= homeworkRepository.save(homework);
		return ResponseEntity.created(new URI("/api/homeworks" + result.getId())).body(result);
	}
}
