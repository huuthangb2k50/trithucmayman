package com.newway.model;

public class BundleStatus {
	private String msisdn;
	
	private String bundleName;
	
	private long donGia;
	
	private long giaKm;
	
	private String loaiGoi;
	
	private int dkStatus;

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getBundleName() {
		return bundleName;
	}

	public void setBundleName(String bundleName) {
		this.bundleName = bundleName;
	}

	public long getDonGia() {
		return donGia;
	}

	public void setDonGia(long donGia) {
		this.donGia = donGia;
	}

	public long getGiaKm() {
		return giaKm;
	}

	public void setGiaKm(long giaKm) {
		this.giaKm = giaKm;
	}



	public String getLoaiGoi() {
		return loaiGoi;
	}

	public void setLoaiGoi(String loaiGoi) {
		this.loaiGoi = loaiGoi;
	}

	public int getDkStatus() {
		return dkStatus;
	}

	public void setDkStatus(int dkStatus) {
		this.dkStatus = dkStatus;
	}
	
	
	
}
