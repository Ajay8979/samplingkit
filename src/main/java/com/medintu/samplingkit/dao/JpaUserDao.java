package com.medintu.samplingkit.dao;

import java.util.Arrays;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Root;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import com.medintu.samplingkit.entity.AccessToken;
import com.medintu.samplingkit.entity.Role;
import com.medintu.samplingkit.entity.User;
import com.medintu.samplingkit.response.Response;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public class JpaUserDao extends JpaDao<User, Long> implements UserDao
{
    public JpaUserDao()
    {
        super(User.class);
    }

    @Override
    @Transactional(readOnly = true)
    public User loadUserByUsername(String username) //throws UsernameNotFoundException
    {
        User user = this.findByName(username);
        try {
        	 if (null == user) {
                 throw new UsernameNotFoundException("The user with name " + username + " was not found");
             }
		} catch (UsernameNotFoundException une) {
			System.out.println(une.toString()); 
		}
       
        return user;
    }

    @Override
    @Transactional(readOnly = true)
    public User findByName(String name)
    {
        final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
        final CriteriaQuery<User> criteriaQuery = builder.createQuery(this.entityClass);

        Root<User> root = criteriaQuery.from(this.entityClass);
        Path<String> namePath = root.get("username");
        criteriaQuery.where(builder.equal(namePath, name));

        TypedQuery<User> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
        List<User> users = typedQuery.getResultList();

        if (users.isEmpty()) {
            return null;
        }

        return users.iterator().next();
    }

    @Override
    @Transactional(readOnly = true)
    public Response findAllUsersByPaging(int pageId,int pageSize)
    {
         
	      Long totalPages = 0L;
		  CriteriaBuilder criteriaBuilder = this.getEntityManager().getCriteriaBuilder();
		  
		  CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class); 
		  countQuery.select(criteriaBuilder.count(countQuery.from(User.class))); 
		  Long count = this.getEntityManager().createQuery(countQuery).getSingleResult();
		  totalPages = count/pageSize;
		  totalPages = (totalPages == 0)? totalPages : totalPages+1;
		  System.out.println("Total No.Of Records : "+count);
		  System.out.println("Total No.Of Pages : "+totalPages);	  
		  
		  CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class); 
		  Root<User> from = criteriaQuery.from(User.class); 
		  CriteriaQuery<User> select = criteriaQuery.select(from);
		  
		  TypedQuery<User> typedQuery = this.getEntityManager().createQuery(select);
		  typedQuery.setFirstResult((pageId - 1) * pageSize);
		  typedQuery.setMaxResults(pageSize);
		
		  List<User> reportList =  typedQuery.getResultList();
		  System.out.println("Number Of Records Retrieved = "+reportList.size());
		  Response response = new Response(reportList, totalPages.intValue(), count.intValue(), HttpStatus.OK, "Success");
		  
        return response;
    }

	@Override
	public AccessToken findAccessTokenByUserId(Long id,String token) {
		  final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
	        final CriteriaQuery<AccessToken> criteriaQuery = builder.createQuery(AccessToken.class);
	        Root<AccessToken> root = criteriaQuery.from(AccessToken.class);
	        Path<String> namePath = root.get("user");
	        Path<String> tokenPath=root.get("token");
	        criteriaQuery.where(builder.equal(namePath, id));
	        criteriaQuery.where(builder.equal(tokenPath, token));

	        TypedQuery<AccessToken> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
	        AccessToken accessToken = typedQuery.getSingleResult();
	        return accessToken;

	}

	@Override
	public Response findUsersByRole(int pageId, int pageSize) {

		  Long totalPages = 0L;
		  CriteriaBuilder criteriaBuilder = this.getEntityManager().getCriteriaBuilder();
		  
		  CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class); 
		  Root<User> root=countQuery.from(User.class);
		  countQuery.select(criteriaBuilder.count(root));
		  countQuery.where(root.join("roles").in(Arrays.asList(Role.USER)));
		  Long count = this.getEntityManager().createQuery(countQuery).getSingleResult();
		  totalPages = count/pageSize;
		  totalPages = (totalPages == 0)? totalPages : totalPages+1;
		  System.out.println("Total No.Of Records : "+count);
		  System.out.println("Total No.Of Pages : "+totalPages);	  
		  
		  CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
		  Root<User> from = criteriaQuery.from(User.class); 
		  CriteriaQuery<User> select = criteriaQuery.select(from);
		  criteriaQuery.where(from.join("roles").in(Arrays.asList(Role.USER)));
		  
		  TypedQuery<User> typedQuery = this.getEntityManager().createQuery(select);
		  typedQuery.setFirstResult((pageId - 1) * pageSize);
		  typedQuery.setMaxResults(pageSize);
		
		  List<User> userList =  typedQuery.getResultList();
		  System.out.println("Number Of Records Retrieved = "+userList.size());
		  Response response = new Response(userList, totalPages.intValue(), count.intValue(), HttpStatus.OK, "Success");
		 
		  
       return response;

	}

	@Override
	public Response findAdminsByRole(int pageId, int pageSize) {
		
		 Long totalPages = 0L;
		  CriteriaBuilder criteriaBuilder = this.getEntityManager().getCriteriaBuilder();
		  
		  CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class); 
		  Root<User> root=countQuery.from(User.class);
		  countQuery.select(criteriaBuilder.count(root));
		  countQuery.where(root.join("roles").in(Arrays.asList(Role.USER)));
		  Long count = this.getEntityManager().createQuery(countQuery).getSingleResult();
		  totalPages = count/pageSize;
		  totalPages = (totalPages == 0)? totalPages : totalPages+1;
		  System.out.println("Total No.Of Records : "+count);
		  System.out.println("Total No.Of Pages : "+totalPages);	  
		  
		  CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
		  Root<User> from = criteriaQuery.from(User.class); 
		  CriteriaQuery<User> select = criteriaQuery.select(from);
		  criteriaQuery.where(from.join("roles").in(Arrays.asList(Role.SUPERADMIN)));
		  
		  TypedQuery<User> typedQuery = this.getEntityManager().createQuery(select);
		  typedQuery.setFirstResult((pageId - 1) * pageSize);
		  typedQuery.setMaxResults(pageSize);
		
		  List<User> userList =  typedQuery.getResultList();
		  System.out.println("Number Of Records Retrieved = "+userList.size());
		  Response response = new Response(userList, totalPages.intValue(), count.intValue(), HttpStatus.OK, "Success");
		 
		  
      return response;

	}

		
	
	

	
}
