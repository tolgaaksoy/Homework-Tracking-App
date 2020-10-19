package com.tolgaaksoy.HomeworkTrackingAPP.repository;

import com.tolgaaksoy.HomeworkTrackingAPP.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRepository extends JpaRepository<Lesson, Long>{
	Lesson findByName(String name);
}
