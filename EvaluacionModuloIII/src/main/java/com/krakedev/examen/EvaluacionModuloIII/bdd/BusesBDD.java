package com.krakedev.examen.EvaluacionModuloIII.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.examen.EvaluacionModuloIII.entidades.BUSES;
import com.krakedev.examen.EvaluacionModuloIII.exepciones.KrakeException;
import com.krakedev.examen.EvaluacionModuloIII.utils.ConexionBDD;

public class BusesBDD {
	public ArrayList<BUSES> recuperarBuses() throws KrakeException {
		ArrayList<BUSES> buses = new ArrayList<BUSES>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		BUSES bus = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select id_bus, capacidad_max from buses ");
			rs = ps.executeQuery();

			while (rs.next()) {
				String idBus = rs.getString("id_bus");
				int capMax = rs.getInt("capacidad_max");
				bus = new BUSES(idBus, capMax);
				buses.add(bus);
			}
		} catch (KrakeException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeException("Error al consultar. Detalle" + e.getMessage());
		}
		return buses;
	}
}
