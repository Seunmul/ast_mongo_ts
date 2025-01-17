/**
 * Schema definition for Endpoint
 */
import { Schema } from 'mongoose';

type Number = Schema.Types.Number;
type String = Schema.Types.String;
type Boolean = Schema.Types.Boolean;
const Unsigned = { type: Number, min: 0, integer: true };

export const EndpointDefinition = {
  _id: String,
  aors: String,
  auth: { type: String, ref: 'Auth' },
  transport: String,
  rpid_immediate: Boolean,
  webrtc: String,
  device_state_busy_at: Unsigned,
  t38_udptl_maxdatagram: Unsigned,
  dtls_rekey: Unsigned,
  direct_media_method: String,
  send_rpid: Boolean,
  sdp_session: String,
  dtls_verify: String,
  record_on_feature: String,
  dtls_fingerprint: String,
  timers_sess_expires: Unsigned,
  media_encryption_optimistic: Boolean,
  identify_by: String,
  callerid_privacy: String,
  mwi_subscribe_replaces_unsolicited: Boolean,
  cos_audio: Unsigned,
  context: String,
  rtp_symmetric: Boolean,
  moh_suggest: String,
  t38_udptl: Boolean,
  fax_detect: Boolean,
  tos_video: Unsigned,
  srtp_tag_32: Boolean,
  refer_blind_progress: Boolean,
  max_audio_streams: Unsigned,
  bundle: Unsigned,
  use_avpf: Boolean,
  fax_detect_timeout: Unsigned,
  sdp_owner: String,
  force_rport: Boolean,
  rtp_timeout_hold: Unsigned,
  use_ptime: Boolean,
  rtp_timeout: Unsigned,
  preferred_codec_only: Boolean,
  force_avp: Boolean,
  record_off_feature: String,
  from_user: String,
  send_diversion: Boolean,
  t38_udptl_ipv6: Boolean,
  allow_subscribe: Boolean,
  rtp_ipv6: Boolean,
  callerid: String,
  moh_passthrough: Boolean,
  cos_video: Unsigned,
  asymmetric_rtp_codec: Boolean,
  ice_support: Boolean,
  aggregate_mwi: Boolean,
  one_touch_recording: Boolean,
  allow: String,
  rewrite_contact: Boolean,
  user_eq_phone: Boolean,
  rtp_engine: String,
  notify_early_inuse_ringing: Boolean,
  direct_media_glare_mitigation: String,
  trust_id_inbound: Boolean,
  bind_rtp_to_media_address: Boolean,
  disable_direct_media_on_nat: Boolean,
  media_encryption: String,
  media_use_received_transport: Boolean,
  allow_overlap: Boolean,
  dtmf_mode: String,
  tos_audio: Unsigned,
  dtls_setup: String,
  connected_line_method: String,
  g726_non_standard: Boolean,
  '100rel': String,
  timers: String,
  direct_media: Boolean,
  timers_min_se: Unsigned,
  trust_id_outbound: Boolean,
  sub_min_expiry: Unsigned,
  rtcp_mux: Unsigned,
  max_video_streams: Unsigned,
  send_pai: Boolean,
  rtp_keepalive: Unsigned,
  t38_udptl_ec: Unsigned,
  t38_udptl_nat: Boolean,
  allow_transfer: Boolean,
  inband_progress: Boolean,
};
