package com.tolgaaksoy.HomeworkTrackingAPP.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tolgaaksoy.HomeworkTrackingAPP.model.Lesson;
import com.tolgaaksoy.HomeworkTrackingAPP.repository.LessonRepository;

@RestController
@RequestMapping("/api")
public class LessonController {
	
		private LessonRepository lessonRepository;

		public LessonController(LessonRepository lessonRepository) {
			super();
			this.lessonRepository = lessonRepository;
		}
		
		
		@GetMapping("/lessons")
		Collection<Lesson> lessons(){
			return lessonRepository.findAll();
		}
		
		//lesson/2
		@GetMapping("/lesson/{id}")
		ResponseEntity<?> getLesson(@PathVariable Long id){
		Optional<Lesson> lesson = lessonRepository.findById(id);
		 return lesson.map(response -> ResponseEntity.ok().body(response))
				 .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		 
		}
		
		
		
		@PostMapping("/lesson")
		ResponseEntity<Lesson> createLesson(@Valid @RequestBody Lesson lesson) throws URISyntaxException{
		  Lesson result= lessonRepository.save(lesson);
		  return ResponseEntity.created(new URI("/api/lesson" + result.getId())).body(result);
		
		}
		
		
		@PutMapping("/lesson/{id}")
		ResponseEntity<Lesson> updateLesson(@Valid @RequestBody Lesson lesson){
			Lesson result= lessonRepository.save(lesson);
			return ResponseEntity.ok().body(result);
		}
		
		
		
		@DeleteMapping("/lesson/{id}")
		ResponseEntity<?> deleteLesson(@PathVariable Long id){
			lessonRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
}

