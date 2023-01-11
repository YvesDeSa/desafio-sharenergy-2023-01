import {
  Container,
  Content,
  Exit,
  Submit,
} from "./style";

import { Header } from "../../components/Header";
import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/toast";
import { InputTransaction } from "../../components/InputTransaction";

interface ICustomer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  document: string;
}

export const Customers: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const [customers, setCustomers] = useState<ICustomer[]>();
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    handleCustomers();
  }, [customers]);

  const handleCustomers = useCallback(() => {
    api.get("/customers/find-all").then((response) => {
      setCustomers(response.data)
    })
  }, [])

  const handleDeleteCustomer = useCallback((document) => {
    api.delete("/customers/delete", { params: { document: document } }).then(() => {
      console.log("delete")
    })
  }, []);

  const handleFormOpenUpdate = useCallback((value: ICustomer) => {
    setIsForm(true);

    setTimeout(() => {
      formRef.current?.setData({
        _id: value._id,
        name: value.name,
        email: value.email,
        address: value.address,
        phone: value.phone,
        document: value.document
      });
    }, 50)
  }, [isForm]);

  const handleFormOpenCreate = useCallback(() => {
    setIsForm(true);
  }, []);

  const handleSubmit = useCallback(async (data: ICustomer) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('Email é obrigatório'),
        phone: Yup.string().required('Telefone é obrigatório'),
        address: Yup.string().required('Endereço é obrigatório'),
        document: Yup.string().required('Cpf é obrigatório'),

      });

      await schema.validate(data, {
        abortEarly: false,
      });


      data._id.length > 0
        ? api.put("/customers/update", {
          name: data.name,
          email: data.email,
          address: data.address,
          phone: data.phone,
          document: data.document
        }).then((response) => {
          setIsForm(false)
          handleCustomers()
        })
        : api.post("/customers/create",
          {
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            document: data.document
          }
        ).then((response) => {
          setIsForm(false)
          handleCustomers()
        })

    } catch (error) {
      if (error instanceof Yup.ValidationError) {

        formRef.current?.setErrors(getValidationErros(error as Yup.ValidationError));

        error.inner.forEach((err) => {
          if (err.path)
            addToast({
              type: 'error',
              title: 'Erro na Validação',
              description: `${err.message}`
            });

        });

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
      });
    }
  }, []);

  return <>
    <Container>
      <Header />
      <Content>

        <button onClick={() => handleFormOpenCreate()}> <FiPlus /> </button>

        {
          isForm ? <Form ref={formRef} onSubmit={handleSubmit} >
            <InputTransaction name="_id" type="hidden" />
            <InputTransaction name="name" type="text" placeholder="Nome" />
            <InputTransaction name="email" type="text" placeholder="Email" />
            <InputTransaction name="address" type="text" placeholder="Endereço" />
            <InputTransaction name="phone" type="text" placeholder="Telefone" />
            <InputTransaction name="document" type="text" placeholder="Cpf" />

            <Exit onClick={() => { setIsForm(false) }}> Cancelar </Exit>

            <Submit type="submit" />
          </Form> : null
        }
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Email</td>
              <td>Endereço</td>
              <td>Telefone</td>
              <td>Cpf</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
          </thead>
          <tbody>
            {
              customers?.map((customer) => {
                return (
                  <tr key={customer._id}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.document}</td>
                    <td><button onClick={() => handleFormOpenUpdate(customer)}> <FiEdit color="#3162b7" /> </button></td>
                    <td><button onClick={() => handleDeleteCustomer(customer.document)} > <FiTrash color="#c53030" /> </button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Content>
    </Container>
  </>;
}