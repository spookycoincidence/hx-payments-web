# 🔌 Integración con Backend – HX Payments (Golang)

## Endpoints esperados

| Acción                  | Método | Endpoint                  |
|-------------------------|--------|---------------------------|
| Login                   | POST   | `/auth/login`             |
| Obtener saldo           | GET    | `/wallet/balance`         |
| Enviar dinero           | POST   | `/transactions/send`      |
| Solicitar dinero        | POST   | `/transactions/request`   |
| Ver transacciones       | GET    | `/transactions`           |
| Actualizar perfil       | PUT    | `/user/profile`           |

## Tokens y seguridad

- Se utilizará JWT o similar.
- El token debe guardarse en `localStorage` o `sessionStorage` para mantener la sesión.

## Estados simulados

Por ahora los formularios solo redirigen entre vistas. No hay validación real ni persistencia de datos.
