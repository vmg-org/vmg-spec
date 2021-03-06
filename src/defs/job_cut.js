module.exports = {
   primaryKey: 'id_of_media_spec',
  properties: {
    id_of_media_spec: {
      type: 'integer',
      description: 'Media spec id - id of job',
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'cascade'
      }
    },
    id_of_et_job: {
      type: 'string',
      maxLength: 255,
      description: 'The id that Elastic Transcoder assigned to the job'
    },
    id_of_job_status: {
      type: 'string',
      maxLength: 50,
      description: 'Status, like submitted, progressind...',
      zref: {
        mdl: 'job_status',
        fld: 'id',
        del: 'restrict'
      }
    },
    status_detail: {
      type: 'string',
      maxLength: 800,
      description: 'Desc of error or other status'
    },
    cutting_start: {
      type: 'integer',
      format: 'int64',
      description: 'Start position to cut, in ms'
    },
    cutting_stop: {
      type: 'integer',
      format: 'int64',
      description: 'Stop position to cut, in ms'
    }
  }
};
