package com.newway.util;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Properties;

import org.apache.log4j.Logger;

public class GetParamInfoSingleton {
	
	private Logger log = Logger.getLogger(GetParamInfoSingleton.class.getName());
	private static GetParamInfoSingleton param= new GetParamInfoSingleton();
	
	
	private String regUrl;
	private String unregUrl;
	private String secureCode ;
	private String returnUrl;
	private String backUrl;
	private String cp;
	private String service;
	
	
	private GetParamInfoSingleton(){
		
		
		
		loadChargingConfig();
		
		
	}
	
	private void loadChargingConfig(){
		Properties prop = new Properties();
    	InputStream input = null;    	
    	try {        
    		String filename = "config.properties";
    		input = GetParamInfoSingleton.class.getClassLoader().getResourceAsStream(filename);
    		if(input==null){
    	            //System.out.println("Sorry, unable to find " + filename);
    				log.error("Sorry, unable to find " + filename);	
    		    return;
    		}

    		//load a properties file from class path, inside static method
    		prop.load(input);
             this.cp =prop.getProperty("cp");
             this.returnUrl= prop.getProperty("returnurl");
             this.backUrl = prop.getProperty("backurl");
             this.secureCode= prop.getProperty("SECURE_CODE");
             this.service=prop.getProperty("service");
             this.regUrl= prop.getProperty("REG_VASGATE_URL");
             this.unregUrl= prop.getProperty("UNREG_VASGATE_URL");
                
    	} catch (IOException ex) {
    		ex.printStackTrace();
        } finally{
        	if(input!=null){
        		try {
				input.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
        	}
        }
	}
	
	
	public static GetParamInfoSingleton getInstance(){
		return param;
	}

	public String getSecureCode() {
		return secureCode;
	}

	public String getReturnUrl() {
		
		/*try {
			this.returnUrl = URLEncoder.encode(this.returnUrl,"UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		
		return returnUrl;
	}

	public String getBackUrl() {
		/*try {
			this.backUrl = URLEncoder.encode(this.backUrl, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		
		return backUrl;
	}

	public String getCp() {
		return cp;
	}

	public String getService() {
		return service;
	}

	public String getRegUrl() {
		return regUrl;
	}

	public String getUnregUrl() {
		return unregUrl;
	}
	
	
}
