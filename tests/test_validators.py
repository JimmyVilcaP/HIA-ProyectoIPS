import sys
import os

sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..", "src")
    )
)
# tests/test_validators.py

from utils.validators import (
    validate_email,
    validate_password,
    validate_signup_fields,
    validate_pdf_content
)

# Email Validation

def test_valid_email():
    assert validate_email("usuario@gmail.com") is True

def test_invalid_email():
    assert validate_email("correo-invalido") is False


# Password Validation

def test_valid_password():
    valid, error = validate_password("Passw0rd")
    assert valid is True
    assert error is None

def test_short_password():
    valid, error = validate_password("abc")
    assert valid is False

def test_password_without_uppercase():
    valid, error = validate_password("password123")
    assert valid is False

def test_password_without_number():
    valid, error = validate_password("Password")
    assert valid is False


# Signup Validation

def test_valid_signup():
    valid, error = validate_signup_fields(
        "Jimmy",
        "jimmy@gmail.com",
        "Passw0rd",
        "Passw0rd"
    )
    assert valid is True

def test_signup_password_mismatch():
    valid, error = validate_signup_fields(
        "Jimmy",
        "jimmy@gmail.com",
        "Passw0rd",
        "OtroPass"
    )
    assert valid is False


# PDF Content Validation

def test_valid_medical_report():
    text = """
    Patient blood test report.
    Hemoglobin levels are normal.
    Laboratory analysis completed.
    """
    valid, error = validate_pdf_content(text)

    assert valid is True

def test_invalid_medical_report():
    text = """
    Factura comercial de venta de productos.
    Documento administrativo.
    """

    valid, error = validate_pdf_content(text)

    assert valid is False

def test_long_document_is_accepted():
    text = "A" * 600

    valid, error = validate_pdf_content(text)

    assert valid is True