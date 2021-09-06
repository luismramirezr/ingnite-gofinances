import { categories } from 'app/config/constants';

import type { CategoryType } from 'app/types/models';

const getCategory = (category: CategoryType) => categories[category];

export default getCategory;
