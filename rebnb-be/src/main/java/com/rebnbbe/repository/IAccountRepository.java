package com.rebnbbe.repository;

import com.rebnbbe.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Long> {
    @Query(value = "select a.* from user u join account a on u.id = a.user_id  where u.email = ?1", nativeQuery = true)
    Account findAccountByEmail(String userEmail);
}
