import * as Yup from 'yup';
import { IValidationSchema } from '../import.interfaces';

export const validationSchema: Yup.ObjectSchema<IValidationSchema> = Yup.object().shape({
    csv: Yup.string().required('CSV input is required').defined(),
});
