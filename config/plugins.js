module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        path: env('UPLOAD_PATH', 'public/uploads'), // Aquí cambias la ruta
      },
    },
  },
});
