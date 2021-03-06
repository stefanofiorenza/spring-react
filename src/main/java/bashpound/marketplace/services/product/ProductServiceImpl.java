package bashpound.marketplace.services.product;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bashpound.marketplace.domain.model.Product;
import bashpound.marketplace.infra.repository.ProductMapper;

@Service
//@Primary
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductMapper pm;

	@Override
	public void productRegister(Product product) {
		pm.productRegister(product);
	}

	@Override
	public List<Product> listProductAll() {
		return pm.listProductAll();
	}

	@Override
	public List<Product> searchProduct(String category, String key) {
		List<Product> list = null;

		list = pm.searchProduct(category, key);

		return list;
	}

	@Override
	public Product productDetail(Long productId) {
		return pm.productDetail(productId);
	}

	@Override
	public List<Product> processGetProductById(List<Integer> pids) {
		List<Product> results = pm.selectInPid(pids);
		return results;
	}

}
