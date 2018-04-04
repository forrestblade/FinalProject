package com.example.server;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Businesses {
	@Id
	private Long id;
	private String name;
	private String business_type;
	private String username;
	private String password;
	private String email_address;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBusiness_type() {
		return business_type;
	}

	public void setBusiness_type(String business_type) {
		this.business_type = business_type;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public Long getId() {
		return id;
	}
}
