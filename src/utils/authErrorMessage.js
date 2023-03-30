import toastMessage from './toastMessage';

export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return toastMessage('Geçersiz e-posta adresi.');

    case 'auth/email-already-exists':
      return toastMessage(
        'Bu e-posta adresi zaten var. Şifrenizi unuttuysanız, Giriş sayfasına dönerek, Şifremi unuttum seçeneğini deneyin',
      );

    case 'auth/email-already-in-use':
      return toastMessage(
        'Bu e-posta adresi zaten var. Şifrenizi unuttuysanız, Giriş sayfasına dönerek, Şifremi unuttum seçeneğini deneyin',
      );

    case 'auth/invalid-password':
      return toastMessage(
        'Geçersiz şifre. En az altı karakterden oluşmalıdır.',
      );

    case 'auth/id-token-expired':
      return toastMessage('Sağlanan ID belirtecinin süresi doldu.');

    case 'auth/user-not-found':
      return toastMessage('Kullanıcı bulunamadı.');

    case 'auth/user-disabled':
      return toastMessage(
        'Giriş yapamazsınız. Detaylar için iletişime geçiniz.',
      );

    default:
      return console.log('Hata', errorCode);
  }
}
