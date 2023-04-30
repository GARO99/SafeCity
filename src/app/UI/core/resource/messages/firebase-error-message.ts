import { ResourceErrorMessageDictionary } from "../../models/resource-error-message-dictionary.model"

const FirebaseErrorMessage: ResourceErrorMessageDictionary[] = [
  ['en', {
    "auth/claims-too-large": {
      toDev: "The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.",
      toClient: "default"
    },
    "auth/email-already-exists": {
      toDev: "The provided email is already in use by an existing user. Each user must have a unique email.",
      toClient: "The provided email is already in use by an existing user, please provide another email."
    },
    "auth/id-token-expired": {
      toDev: "The provided Firebase ID token is expired.",
      toClient: "Your ID token has expired, please try to log in again."
    },
    "auth/id-token-revoked": {
      toDev: "The Firebase ID token has been revoked.",
      toClient: "Your ID token has been revoked, please try to log in again."
    },
    "auth/insufficient-permission": {
      toDev: "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.",
      toClient: "default"
    },
    "auth/internal-error": {
      toDev: "The Authentication server encountered an unexpected error while trying to process the request. The error message should contain the response from the Authentication server containing additional information. If the error persists, please report the problem to our Bug Report support channel.",
      toClient: "default"
    },
    "auth/invalid-argument": {
      toDev: "An invalid argument was provided to an Authentication method. The error message should contain additional information.",
      toClient: "default"
    },
    "auth/invalid-claims": {
      toDev: "The custom claim attributes provided to setCustomUserClaims() are invalid.",
      toClient: "default"
    },
    "auth/invalid-continue-uri": {
      toDev: "The continue URL must be a valid URL string.",
      toClient: "default"
    },
    "auth/invalid-creation-time": {
      toDev: "The creation time must be a valid UTC date string.",
      toClient: "default"
    },
    "auth/invalid-credential": {
      toDev: "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.",
      toClient: "default"
    },
    "auth/invalid-disabled-field": {
      toDev: "The provided value for the disabled user property is invalid. It must be a boolean.",
      toClient: "default"
    },
    "auth/invalid-display-name": {
      toDev: "The provided value for the displayName user property is invalid. It must be a non-empty string.",
      toClient: "The provided value from your name is invalid, please write a non-empty text."
    },
    "auth/invalid-dynamic-link-domain": {
      toDev: "The provided dynamic link domain is not configured or authorized for the current project.",
      toClient: "default"
    },
    "auth/invalid-email": {
      toDev: "The provided value for the email user property is invalid. It must be a string email address.",
      toClient: "The provided value for your email is invalid, please write a valid email address."
    },
    "auth/invalid-email-verified": {
      toDev: "The provided value for the emailVerified user property is invalid. It must be a boolean.",
      toClient: "default"
    },
    "auth/invalid-hash-algorithm": {
      toDev: "The hash algorithm must match one of the strings in the list of supported algorithms.",
      toClient: "default"
    },
    "auth/invalid-hash-block-size": {
      toDev: "The hash block size must be a valid number.",
      toClient: "default"
    },
    "auth/invalid-hash-derived-key-length": {
      toDev: "The hash derived key length must be a valid number.",
      toClient: "default"
    },
    "auth/invalid-hash-key": {
      toDev: "The hash key must a valid byte buffer.",
      toClient: "default"
    },
    "auth/invalid-hash-memory-cost": {
      toDev: "The hash memory cost must be a valid number.",
      toClient: "default"
    },
    "auth/invalid-hash-parallelization": {
      toDev: "The hash parallelization must be a valid number.",
      toClient: "default"
    },
    "auth/invalid-hash-rounds": {
      toDev: "The hash rounds must be a valid number.",
      toClient: "default"
    },
    "auth/invalid-hash-salt-separator": {
      toDev: "The hashing algorithm salt separator field must be a valid byte buffer.",
      toClient: "default"
    },
    "auth/invalid-id-token": {
      toDev: "The provided ID token is not a valid Firebase ID token.",
      toClient: "default"
    },
    "auth/invalid-last-sign-in-time": {
      toDev: "The last sign-in time must be a valid UTC date string.",
      toClient: "default"
    },
    "auth/invalid-page-token": {
      toDev: "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.",
      toClient: "default"
    },
    "auth/invalid-password": {
      toDev: "The provided value for the password user property is invalid. It must be a string with at least six characters.",
      toClient: "The provided value for your password is invalid, please write a string with at least six characters."
    },
    "auth/invalid-password-hash": {
      toDev: "The password hash must be a valid byte buffer.",
      toClient: "default"
    },
    "auth/invalid-password-salt": {
      toDev: "The password salt must be a valid byte buffer",
      toClient: "default"
    },
    "auth/wrong-password": {
      toDev: "The email and password you entered don't match",
      toClient: "The email and password you entered don't match"
    },
    "auth/invalid-phone-number": {
      toDev: "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
      toClient: "The provided value for your phone number is invalid, please write a non-empty text following the E.164 standard."
    },
    "auth/invalid-photo-url": {
      toDev: "The provided value for the photoURL user property is invalid. It must be a string URL.",
      toClient: "The provided URL for your profile photo is invalid, please write a valid URL."
    },
    "auth/invalid-provider-data": {
      toDev: "The providerData must be a valid array of UserInfo objects.",
      toClient: "default"
    },
    "auth/invalid-provider-id": {
      toDev: "The providerId must be a valid supported provider identifier string.",
      toClient: "default"
    },
    "auth/invalid-oauth-responsetype": {
      toDev: "Only exactly one OAuth responseType should be set to true.",
      toClient: "default"
    },
    "auth/invalid-session-cookie-duration": {
      toDev: "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.",
      toClient: "default"
    },
    "auth/invalid-uid": {
      toDev: "The provided uid must be a non-empty string with at most 128 characters.",
      toClient: "The provided value for the user identifier is not valid, please write a non-empty text with at most 128 characters."
    },
    "auth/invalid-user-import": {
      toDev: "The user record to import is invalid.",
      toClient: "default"
    },
    "auth/maximum-user-count-exceeded": {
      toDev: "The maximum allowed number of users to import has been exceeded.",
      toClient: "default"
    },
    "auth/missing-android-pkg-name": {
      toDev: "An Android Package Name must be provided if the Android App is required to be installed.",
      toClient: "default"
    },
    "auth/missing-continue-uri": {
      toDev: "A valid continue URL must be provided in the request.",
      toClient: "default"
    },
    "auth/missing-hash-algorithm": {
      toDev: "Importing users with password hashes requires that the hashing algorithm and its parameters be provided.",
      toClient: "default"
    },
    "auth/missing-ios-bundle-id": {
      toDev: "The request is missing a Bundle ID.",
      toClient: "default"
    },
    "auth/missing-uid": {
      toDev: "A uid identifier is required for the current operation.",
      toClient: "default"
    },
    "auth/missing-oauth-client-secret": {
      toDev: "The OAuth configuration client secret is required to enable OIDC code flow.",
      toClient: "default"
    },
    "auth/operation-not-allowed": {
      toDev: "The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.",
      toClient: "This sign-in method is not available currently."
    },
    "auth/phone-number-already-exists": {
      toDev: "The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.",
      toClient: "The provided phone number is already in use by another user, please provide another phone number."
    },
    "auth/project-not-found": {
      toDev: "No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.",
      toClient: "default"
    },
    "auth/reserved-claims": {
      toDev: "One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.",
      toClient: "default"
    },
    "auth/session-cookie-expired": {
      toDev: "The provided Firebase session cookie is expired.",
      toClient: "default"
    },
    "auth/session-cookie-revoked": {
      toDev: "The Firebase session cookie has been revoked.",
      toClient: "default"
    },
    "auth/uid-already-exists": {
      toDev: "The provided uid is already in use by an existing user. Each user must have a unique uid.",
      toClient: "default"
    },
    "auth/unauthorized-continue-uri": {
      toDev: "The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.",
      toClient: "default"
    },
    "auth/user-not-found": {
      toDev: "There is no existing user record corresponding to the provided identifier.",
      toClient: "User not found, please check your information."
    },
    "auth/too-many-requests": {
      toDev: "We have blocked this request due to unusual activity. You can reset it immediately by resetting your password or you can try again later.",
      toClient: "We have blocked this request due to unusual activity. You can reset it immediately by resetting your password or you can try again later."
    },
    "auth/email-already-in-use": {
      toDev: "The email address is already in use by another account.",
      toClient: "The email address is already in use by another account."
    },
    "storage/unknown": {
      toDev: "An unknown error occurred.",
      toClient: "default"
    },
    "storage/object-not-found": {
      toDev: "No object exists at the desired reference.",
      toClient: "default"
    },
    "storage/bucket-not-found": {
      toDev: "No bucket is configured for Cloud Storage",
      toClient: "default"
    },
    "storage/project-not-found": {
      toDev: "No project is configured for Cloud Storage",
      toClient: "default"
    },
    "storage/quota-exceeded": {
      toDev: "Quota on your Cloud Storage bucket has been exceeded. If you're on the no-cost tier, upgrade to a paid plan. If you're on a paid plan, reach out to Firebase support.",
      toClient: "Limit of the free plan exceeded, please return tomorrow."
    },
    "storage/unauthenticated": {
      toDev: "User is unauthenticated, please authenticate and try again.",
      toClient: "You must log in to perform this action."
    },
    "storage/unauthorized": {
      toDev: "User is not authorized to perform the desired action, check your security rules to ensure they are correct.",
      toClient: "You don't have the permissions to perform this action."
    },
    "storage/retry-limit-exceeded": {
      toDev: "The maximum time limit on an operation (upload, download, delete, etc.) has been excceded. Try uploading again.",
      toClient: "Waiting time exceeded."
    },
    "storage/invalid-checksum": {
      toDev: "File on the client does not match the checksum of the file received by the server. Try uploading again.",
      toClient: "Error with the file, try to upload it again."
    },
    "storage/canceled": {
      toDev: "User canceled the operation.",
      toClient: "Operation canceled by the user."
    },
    "storage/invalid-event-name": {
      toDev: "Invalid event name provided. Must be one of ['running', 'progress', 'pause']",
      toClient: "default"
    },
    "storage/invalid-url": {
      toDev: "Invalid URL provided to refFromURL(). Must be of the form: gs://bucket/object or https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>",
      toClient: "default"
    },
    "storage/invalid-argument": {
      toDev: "The argument passed to put() must be 'File', 'Blob', or 'UInt8' Array. The argument passed to putString() must be a raw, 'Base64', or 'Base64URL' string.",
      toClient: "default"
    },
    "storage/no-default-bucket": {
      toDev: "No bucket has been set in your config's storageBucket property.",
      toClient: "default"
    },
    "storage/cannot-slice-blob": {
      toDev: "Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file hasn't changed.",
      toClient: "Error with the file, try to upload it again."
    },
    "storage/server-file-wrong-size": {
      toDev: "File on the client does not match the size of the file recieved by the server. Try uploading again.",
      toClient: "Error with the file, try to upload it again."
    }
  }], ['es', {
    "auth/claims-too-large": {
      toDev: "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.",
      toClient: "default"
    },
    "auth/email-already-exists": {
      toDev: "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.",
      toClient: "Otro usuario ya está utilizando este correo electrónico, por favor escriba otro."
    },
    "auth/id-token-expired": {
      toDev: "El token de ID de Firebase que se proporcionó está vencido.",
      toClient: "Tu token de ID ha vencido, vuelve a iniciar sesión."
    },
    "auth/id-token-revoked": {
      toDev: "Se revocó el token de ID de Firebase.",
      toClient: "Tu token de ID ha sido revocado, vuelve a iniciar sesión"
    },
    "auth/insufficient-permission": {
      toDev: "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar una credencial con los permisos apropiados y usarla a fin de autenticar los SDK de Admin.",
      toClient: "default"
    },
    "auth/internal-error": {
      toDev: "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud. Para obtener información adicional, revisa la respuesta del servidor de autenticación, que debería estar incluida en el mensaje de error. Si el error persiste, avísanos mediante nuestro canal de asistencia de informe de errores.",
      toClient: "default"
    },
    "auth/invalid-argument": {
      toDev: "Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional.",
      toClient: "default"
    },
    "auth/invalid-claims": {
      toDev: "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.",
      toClient: "default"
    },
    "auth/invalid-continue-uri": {
      toDev: "La URL de continuación debe ser una string de URL válida.",
      toClient: "default"
    },
    "auth/invalid-creation-time": {
      toDev: "La hora de creación debe ser una string de fecha en formato UTC válida.",
      toClient: "default"
    },
    "auth/invalid-credential": {
      toDev: "La credencial que se usa para autenticar los SDK de Admin no se puede emplear a fin de realizar la acción deseada. Algunos métodos de autenticación, como createCustomToken() y verifyIdToken(), requieren que los SDK se inicialicen con una credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializa el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado.",
      toClient: "default"
    },
    "auth/invalid-disabled-field": {
      toDev: "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.",
      toClient: "default"
    },
    "auth/invalid-display-name": {
      toDev: "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.",
      toClient: "El valor que se proporcionó para su nombre no es válido, por favor escriba un texto no vacío."
    },
    "auth/invalid-dynamic-link-domain": {
      toDev: "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.",
      toClient: "default"
    },
    "auth/invalid-email": {
      toDev: "El valor que se proporcionó para la propiedad del usuario email no es válido. Debe ser una dirección de correo electrónico de string.",
      toClient: "El valor que se proporcionó para su correo electrónico no es válido, por favor escriba una dirección de correo válida."
    },
    "auth/invalid-email-verified": {
      toDev: "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.",
      toClient: "default"
    },
    "auth/invalid-hash-algorithm": {
      toDev: "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.",
      toClient: "default"
    },
    "auth/invalid-hash-block-size": {
      toDev: "El tamaño del conjunto de hash debe ser un número válido.",
      toClient: "default"
    },
    "auth/invalid-hash-derived-key-length": {
      toDev: "La longitud de la clave derivada de hash debe ser un número válido.",
      toClient: "default"
    },
    "auth/invalid-hash-key": {
      toDev: "La clave de hash debe ser un búfer de bytes válido.",
      toClient: "default"
    },
    "auth/invalid-hash-memory-cost": {
      toDev: "El costo de la memoria de hash debe ser un número válido.",
      toClient: "default"
    },
    "auth/invalid-hash-parallelization": {
      toDev: "La paralelización de hash debe ser un número válido.",
      toClient: "default"
    },
    "auth/invalid-hash-rounds": {
      toDev: "Las rondas de hash deben ser un número válido.",
      toClient: "default"
    },
    "auth/invalid-hash-salt-separator": {
      toDev: "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.",
      toClient: "default"
    },
    "auth/invalid-id-token": {
      toDev: "El token de ID que se proporcionó no es un token de ID de Firebase válido.",
      toClient: "default"
    },
    "auth/invalid-last-sign-in-time": {
      toDev: "La hora del último acceso debe ser una string de fecha en formato UTC válida.",
      toClient: "default"
    },
    "auth/invalid-page-token": {
      toDev: "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.",
      toClient: "default"
    },
    "auth/invalid-password": {
      toDev: "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.",
      toClient: "El valor que se proporcionó para la contraseña no es válido, por favor escriba un texto con al menos seis caracteres."
    },
    "auth/invalid-password-hash": {
      toDev: "El hash de contraseñas debe ser un búfer de bytes válidos.",
      toClient: "default"
    },
    "auth/invalid-password-salt": {
      toDev: "La contraseña con sal debe ser un búfer de bytes válido.",
      toClient: "default"
    },
    "auth/wrong-password": {
      toDev: "El correo electrónico y la contraseña que ingresó no coinciden",
      toClient: "El correo electrónico y la contraseña que ingresó no coinciden"
    },
    "auth/invalid-phone-number": {
      toDev: "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.",
      toClient: "El valor que se proporcionó para el número de teléfono no es válido, por favor escriba un texto no vacío que cumpla con el estándar E.164."
    },
    "auth/invalid-photo-url": {
      toDev: "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.",
      toClient: "El valor que se proporcionó para la URL de su foto de percil no es válido, por favor escriba una URL válida."
    },
    "auth/invalid-provider-data": {
      toDev: "providerData debe ser una serie de objetos UserInfo.",
      toClient: "default"
    },
    "auth/invalid-provider-id": {
      toDev: "providerId debe ser una string del identificador del proveedor compatible válida.",
      toClient: "default"
    },
    "auth/invalid-oauth-responsetype": {
      toDev: "Se debe configurar solo un responseType de OAuth como verdadera.",
      toClient: "default"
    },
    "auth/invalid-session-cookie-duration": {
      toDev: "La duración de la cookie de sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.",
      toClient: "default"
    },
    "auth/invalid-uid": {
      toDev: "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.",
      toClient: "default"
    },
    "auth/invalid-user-import": {
      toDev: "El registro de usuarios para importar no es válido.",
      toClient: "default"
    },
    "auth/maximum-user-count-exceeded": {
      toDev: "Se excedió la cantidad máxima de usuarios permitidos para importar.",
      toClient: "default"
    },
    "auth/missing-android-pkg-name": {
      toDev: "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.",
      toClient: "default"
    },
    "auth/missing-continue-uri": {
      toDev: "Se debe proporcionar una URL de continuación válida en la solicitud.",
      toClient: "default"
    },
    "auth/missing-hash-algorithm": {
      toDev: "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.",
      toClient: "default"
    },
    "auth/missing-ios-bundle-id": {
      toDev: "La solicitud debe contener un ID del paquete de iOS.",
      toClient: "default"
    },
    "auth/missing-uid": {
      toDev: "Se requiere un identificador uid para la operación actual.",
      toClient: "default"
    },
    "auth/missing-oauth-client-secret": {
      toDev: "El secreto de cliente de la configuración de OAuth es obligatorio para habilitar el flujo de código de OIDC.",
      toClient: "default"
    },
    "auth/operation-not-allowed": {
      toDev: "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.",
      toClient: "default"
    },
    "auth/phone-number-already-exists": {
      toDev: "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.",
      toClient: "Otro usuario ya está utilizando este número de teléfono, por favor escriba otro."
    },
    "auth/project-not-found": {
      toDev: "No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de Admin. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar la credencial de tu proyecto y usarla a fin de autenticar los SDK de Admin.",
      toClient: "default"
    },
    "auth/reserved-claims": {
      toDev: "Una o más reclamaciones personalizadas de usuarios que se entregaron a setCustomUserClaims() están reservadas. Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados.",
      toClient: "default"
    },
    "auth/session-cookie-expired": {
      toDev: "La cookie proporcionada de la sesión de Firebase venció.",
      toClient: "default"
    },
    "auth/session-cookie-revoked": {
      toDev: "Se revocaron las cookies de la sesión de Firebase.",
      toClient: "default"
    },
    "auth/uid-already-exists": {
      toDev: "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.",
      toClient: "default"
    },
    "auth/unauthorized-continue-uri": {
      toDev: "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console.",
      toClient: "default"
    },
    "auth/user-not-found": {
      toDev: "No existe ningún registro de usuario que corresponda al identificador proporcionado.",
      toClient: "Usuario no encontrado, por favor revise su información."
    },    
    "auth/email-already-in-use": {
      toDev: "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.",
      toClient: "La dirección de correo electrónico ya está siendo utilizada por otra cuenta."
    },
    "auth/too-many-requests": {
      toDev: "Hemos bloqueado esta solicitud debido a una actividad inusual. Puede restablecerlo inmediatamente restableciendo su contraseña o puede volver a intentarlo más tarde.",
      toClient: "Hemos bloqueado esta solicitud debido a una actividad inusual. Puede restablecerlo inmediatamente restableciendo su contraseña o puede volver a intentarlo más tarde." 
    },
    "storage/unknown": {
      toDev: "Ocurrió un error desconocido.",
      toClient: "default"
    },
    "storage/object-not-found": {
      toDev: "No existe ningún objeto en la referencia deseada.",
      toClient: "default"
    },
    "storage/bucket-not-found": {
      toDev: "No se configuró ningún bucket para Cloud Storage.",
      toClient: "default"
    },
    "storage/project-not-found": {
      toDev: "No se configuró ningún proyecto para Cloud Storage.",
      toClient: "default"
    },
    "storage/quota-exceeded": {
      toDev: "Se superó la cuota del bucket de Cloud Storage. Si estás en el nivel sin costo, deberás actualizar a un plan pagado. Si estás en un plan pagado, comunícate con el personal de asistencia de Firebase.",
      toClient: "Limite diario del plan gratuito excedido, vuelve mañana."
    },
    "storage/unauthenticated": {
      toDev: "El usuario no se autenticó. Vuelve a intentarlo después de realizar la autenticación.",
      toClient: "Debe iniciar sesión para relizar esta acción."
    },
    "storage/unauthorized": {
      toDev: "El usuario no está autorizado para realizar la acción deseada. Consulta las reglas de seguridad para asegurarte de que sean correctas.",
      toClient: "No tiene el permiso suficiente para realizar esta acción."
    },
    "storage/retry-limit-exceeded": {
      toDev: "Se superó el límite de tiempo máximo permitido para una operación (de carga, descarga, eliminación, etc.). Vuelve a subirlo.",
      toClient: "Se excedió el tiempo de espera."
    },
    "storage/invalid-checksum": {
      toDev: "El archivo del cliente no coincide con la suma de verificación del archivo que recibió el servidor. Vuelve a subirlo.",
      toClient: "Error en el archivo, intenta volver a subirlo."
    },
    "storage/canceled": {
      toDev: "El usuario canceló la operación.",
      toClient: "Operación cancelada por el usuario."
    },
    "storage/invalid-event-name": {
      toDev: "Se proporcionó un nombre de evento no válido. El modo debe ser uno de los siguientes: 'running', 'progress' o 'pause'.",
      toClient: "default"
    },
    "storage/invalid-url": {
      toDev: "Se proporcionó una URL no válida a refFromURL(). Debes usar el formato gs://bucket/object o https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=&ltTOKEN>",
      toClient: "default"
    },
    "storage/invalid-argument": {
      toDev: "El argumento que se pase a put() debe ser un arreglo de tipo 'File', 'Blob' o 'UInt8'. El argumento que se pase a putString() debe ser una string sin procesar 'Base64' o 'Base64URL'.",
      toClient: "default"
    },
    "storage/no-default-bucket": {
      toDev: "No se estableció ningún bucket en la propiedad storageBucket de tu configuración.",
      toClient: "default"
    },
    "storage/cannot-slice-blob": {
      toDev: "Ocurre generalmente cuando hubo un cambio en el archivo local (se borró, se volvió a guardar, etc.) Intenta volver a subirlo después de verificar que el archivo no haya cambiado.",
      toClient: "Error en el archivo, intenta volver a subirlo."
    },
    "storage/server-file-wrong-size": {
      toDev: "El archivo del cliente no coincide con el tamaño del archivo que recibió el servidor. Vuelve a subirlo.",
      toClient: "Error en el archivo, intenta volver a subirlo."
    }
  }]];

export default FirebaseErrorMessage