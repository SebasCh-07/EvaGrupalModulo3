package com.krakedev.examen.EvaluacionModuloIII.bdd;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import com.krakedev.examen.EvaluacionModuloIII.entidades.BUSES;
import com.krakedev.examen.EvaluacionModuloIII.entidades.Rutas;
import com.krakedev.examen.EvaluacionModuloIII.exepciones.KrakeException;
import com.krakedev.examen.EvaluacionModuloIII.utils.ConexionBDD;

public class RutasBDD {
	public ArrayList<Rutas> recuperarRutas() throws KrakeException {
		ArrayList<Rutas> rutas = new ArrayList<Rutas>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Rutas ruta = null;
		

		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select r.codigoR, r.origen, r.destino, r.horario_salida, b.id_bus, b.capacidad_max "
					+ "from rutas r, buses b "
					+ "where r.bus = b.id_bus ");
			rs = ps.executeQuery();

			while (rs.next()) {
				String codigoR = rs.getString("codigoR");
				String origen = rs.getString("origen");
				String destino = rs.getString("destino");
				Date horarioSalida = rs.getDate("horario_salida");	
				
				String idBus = rs.getString("id_bus");
				int capMax = rs.getInt("capacidad_max");
				
				BUSES bus = new BUSES(idBus, capMax);
				
				SimpleDateFormat  sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
				
				String sd = sdf.format(horarioSalida);

				ruta = new Rutas(codigoR, origen, destino, sd, bus);
				rutas.add(ruta);
			}
		} catch (KrakeException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeException("Error al consultar. Detalle" + e.getMessage());
		}
		return rutas;
	}
}
