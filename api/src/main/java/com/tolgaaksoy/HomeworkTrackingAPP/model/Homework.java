package com.tolgaaksoy.HomeworkTrackingAPP.model;

import java.time.Instant;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="homework")
public class Homework {

	@Id
	private Long id;
	
	private Instant deadline;
	
	private String title;
	
	private String subject;
	
	@ManyToOne
	private Lesson lesson;
	
	@JsonIgnore
	@ManyToOne
	private User user;
	

}
