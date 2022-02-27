package ch.polgrabia.demos.springdemo1.daos;

import ch.polgrabia.demos.springdemo1.entities.Task;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

// @Repository
@NoRepositoryBean // when activated that's true it would cause error but different - bean couldn't be wired
// surely, no 'task table already exists' error. Errors in spring are not just for fun
public class TaskDao extends SimpleJpaRepository<Task, Long> {
    public TaskDao(EntityManager em) {
        super(Task.class, em);
    }
}
