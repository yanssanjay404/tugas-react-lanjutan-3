// src/components/RegisterForm.jsx
import { useState } from 'react'
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import '../assets/register-theme.css'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.'
    }
    if (!formData.username.trim()) newErrors.username = 'Username wajib diisi.'
    if (!formData.password.trim()) newErrors.password = 'Password wajib diisi.'

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const foundErrors = validate()
    if (Object.keys(foundErrors).length === 0) {
      console.log('Data dikirim:', formData)
      setSubmitted(true)
      setFormData({ fullName: '', email: '', username: '', password: '' })
      setErrors({})
    } else {
      setErrors(foundErrors)
      setSubmitted(false)
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="form-container">
          <h3 className="text-center mb-4">🌸 Form Registrasi 🌸</h3>
          {submitted && <Alert variant="success">Registrasi berhasil!</Alert>}

          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label className="form-label">Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              ✦ Daftar ✦
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm
