package com.newway.util;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;





public class SingletonConnection {
	private static SingletonConnection  singleConnection= new SingletonConnection();
	private static DataSource dataSource;
	private static Connection dbConnect;
	
	private SingletonConnection(){
		ApplicationContext context = new ClassPathXmlApplicationContext("META-INF/spring/applicationContext.xml");
		dataSource = (DataSource) context.getBean("dataSource");	
		
		try{
			dbConnect = dataSource.getConnection();
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
	
	
	
	
   /* private Connection getConnection(){
		ApplicationContext context = new ClassPathXmlApplicationContext("META-INF/spring/applicationContext.xml");
		DataSource ds = (DataSource) context.getBean("dataSource");	
		Connection c = null;
		try{
			c = ds.getConnection();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return c;
	}*/
    
    public static SingletonConnection getInstance()
    {
      if(singleConnection == null)
      {
        synchronized (SingletonConnection.class)
        {
          if(singleConnection == null)
          {
        	  singleConnection = new SingletonConnection();
          }
        }
      }
   
      return singleConnection;
    }
    
    
    public static Connection getConnInst()
    {
      try
      {
    	 
        dbConnect = dataSource.getConnection();
      }
      catch (SQLException e1)
      {
        e1.printStackTrace();
      }
       
      if(dbConnect == null)
      {
    	ApplicationContext context = new ClassPathXmlApplicationContext("META-INF/spring/applicationContext.xml");
  		DataSource ds = (DataSource) context.getBean("dataSource");	
  		
  		try{
  			dbConnect = ds.getConnection();
  		}catch(Exception e){
  			e.printStackTrace();
  		}
      }
       
      return dbConnect;   
    }
    
}
