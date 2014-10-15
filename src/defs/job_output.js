module.exports = {
  primaryKey: 'id_of_media_spec',
  properties: {
    id_of_media_spec: {
      type: 'integer',
      description: 'Media spec id - id of job'
    },
    id_of_et_job: {
      type: 'integer',
      description: 'The id that Elastic Transcoder assigned to the job'
    },
    id_of_job_status: {
      type: 'string',
      maxLength: 50,
      description: 'Status, like submitted, progressind...'
    },
    status_detail: {
      type: 'string',
      maxLength: 800,
      description: 'Desc of error or other status'
    }
  }
};