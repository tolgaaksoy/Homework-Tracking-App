package com.tolgaaksoy.HomeworkTrackingAPP.repository;

import com.tolgaaksoy.HomeworkTrackingAPP.model.Homework;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkRepository extends JpaRepository<Homework,Long> {
	
}
