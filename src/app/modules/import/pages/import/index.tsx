import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { Formik, Form, FormikProps, Field } from 'formik';
import { FormGroup, FormControl, Button, Typography } from '@material-ui/core';
import styles from './index.module.scss';
import { importActions } from '../../import.actions';
import { connect } from 'react-redux';
import { IFormValues, IImportProps } from '../../import.interfaces';
import { AppState } from '../../../../shared/store';
import clsx from 'clsx';
import { validationSchema } from '../../utils/validation.schema';
import { useHistory } from 'react-router-dom';

type OwnProps = IImportProps & ReturnType<typeof mapStateToProps>;

const Import = (props: PropsWithChildren<OwnProps>): ReactElement<FunctionComponent<OwnProps>> => {
    const initialValues: IFormValues = { csv: '' };

    const history = useHistory();

    const handleSubmit = (values: IFormValues) => {
        props.submit(values);
        history.push('/explorer');
    };

    return (
        <div className={styles.import}>
            <div className={styles.import__container}>
                <Typography className={styles.title} variant={'h3'}>
                    Import CSV Data
                </Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                    validationSchema={validationSchema}
                >
                    {(props: FormikProps<IFormValues>) => (
                        <Form className={styles.importForm}>
                            <FormGroup className={styles.importForm}>
                                <FormControl className={clsx(styles.formControl, 'mb8')}>
                                    <Field
                                        as="textarea"
                                        className={styles.formInput}
                                        label={'csv'}
                                        name="csv"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.csv}
                                        variant={'outlined'}
                                        required
                                    />
                                </FormControl>
                                <Button
                                    className={styles.submitBtn}
                                    type="submit"
                                    variant={'outlined'}
                                    color={'inherit'}
                                    disabled={!(props.isValid && props.dirty)}
                                >
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        teams: state.import.teams,
    };
};

const mapDispatchToProps = {
    submit: importActions.submit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
