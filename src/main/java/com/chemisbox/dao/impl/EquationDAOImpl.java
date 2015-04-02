package com.chemisbox.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chemisbox.dao.EquationDAO;
import com.chemisbox.entity.Equation;
import com.chemisbox.exception.ChemisboxException;

@Repository
@Transactional
public class EquationDAOImpl implements EquationDAO {

	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@SuppressWarnings("unchecked")
	public List<Equation> selectByChemical(String chemical, int typeOf)
			throws ChemisboxException {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.getNamedQuery("callGetEquationByChemical")
				.setParameter("chemical", chemical)
				.setParameter("typeOf", typeOf);
		return query.list();
	}

	@SuppressWarnings("unchecked")
	public List<Equation> selectByChemicals(String leftChemical,
			String rightChemical) throws ChemisboxException {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.getNamedQuery("callGetEquationsByLeftRight")
				.setParameter("leftChemical", leftChemical)
				.setParameter("rightChemical", rightChemical);
		return query.list();
	}

	public Long add(Equation e) throws ChemisboxException {
		Session session = sessionFactory.getCurrentSession();
		session.save(e);
		return e.getEquationId();
	}

	public Long delete(Equation e) throws ChemisboxException {
		// TODO Auto-generated method stub
		return null;
	}

	public Long update(Equation e) throws ChemisboxException {
		// TODO Auto-generated method stub
		return e.getEquationId();
	}

	public Equation get(Long id) throws ChemisboxException {
		Session session = sessionFactory.getCurrentSession();
		Equation equation = (Equation) session.get(Equation.class, id);
		return equation;
	}

}
