// Utilidades para validación de formularios y datos

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Validación básica para números de teléfono argentinos
  const phoneRegex = /^(\+54|54)?[0-9]{10,11}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

export const validateMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength;
};

export const validateName = (name) => {
  // Validación para nombres (solo letras, espacios y algunos caracteres especiales)
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return nameRegex.test(name) && name.trim().length >= 2;
};

export const validateMessage = (message) => {
  return message && message.trim().length >= 10 && message.trim().length <= 1000;
};

// Validación de formulario de contacto
export const validateContactForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'El nombre es requerido';
  } else if (!validateName(formData.name)) {
    errors.name = 'El nombre debe contener solo letras y tener al menos 2 caracteres';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'El email es requerido';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'El email no es válido';
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = 'El teléfono es requerido';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'El teléfono no es válido';
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'El mensaje es requerido';
  } else if (!validateMessage(formData.message)) {
    errors.message = 'El mensaje debe tener entre 10 y 1000 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Sanitización de datos
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remover caracteres potencialmente peligrosos
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Formateo de teléfono
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
  if (match) {
    return `+54 ${match[1]} ${match[2]}-${match[3]}`;
  }
  return phone;
};

// Validación de archivos
export const validateFile = (file, allowedTypes = [], maxSize = 5 * 1024 * 1024) => {
  const errors = [];

  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    errors.push(`Tipo de archivo no permitido. Tipos permitidos: ${allowedTypes.join(', ')}`);
  }

  if (file.size > maxSize) {
    errors.push(`El archivo es demasiado grande. Tamaño máximo: ${Math.round(maxSize / 1024 / 1024)}MB`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}; 